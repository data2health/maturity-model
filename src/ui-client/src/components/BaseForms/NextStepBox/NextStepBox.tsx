import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../model/AppState';
import { ModelsState, FormState, BaseModel } from '../../../model/ModelsState';
import { UserState } from '../../../model/UserState';
import { modelSetCurrent } from '../../../actions/model';
import { setCurrentView } from '../../../actions/general';
import { AppView } from '../../../model/GeneralState';
import { FiChevronRight } from 'react-icons/fi';
import './NextStepBox.css';

interface OwnProps {
    
}
interface DispatchProps {
    dispatch: any;
}
interface StateProps {
    models: ModelsState;
    user: UserState;
}

type Props = StateProps & DispatchProps & OwnProps;

class NextStepBox extends React.PureComponent<Props> {
    private className = 'next-step-box';

    public render() {
        const { models, user } = this.props;
        const remaining = models.all.filter(m => m.selected && user.answers[m.completeField] !== FormState.Complete);
        const len = remaining.length;
        const c = this.className;

        if (!len) {
            return (
                <div className={c}>
                    <div>You've completed all of your selected models. Take a look at the results and see how you compare.</div>
                    <button className={'maturity-model-button primary-green shadow'} onClick={this.handleSeeResultsClick}>
                        View Results
                        <FiChevronRight />
                    </button>
                </div>
            );
        }
        
        const next = remaining[0];
        return (
            <div className={c}>
                <div>You have {len} model{len > 1 ? 's' : ''} remaining. Next up is the {next.name}</div>
                <button className={'maturity-model-button primary-green shadow'} onClick={this.handleGoToNextSurveyClick.bind(null, next)}>
                    Go to next model
                    <FiChevronRight />
                </button>
            </div>
        )
    }

    public handleGoToNextSurveyClick = (model: BaseModel) => {
        const { dispatch } = this.props;
        dispatch(modelSetCurrent(model));
    }

    public handleSeeResultsClick = () => {
        const { dispatch } = this.props;
        dispatch(setCurrentView(AppView.Results));
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        models: state.models,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatch
    };
};

export default connect<StateProps, DispatchProps, OwnProps, AppState>
    (mapStateToProps, mapDispatchToProps)(NextStepBox);
