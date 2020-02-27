import React from 'react';
import { BaseModel } from '../../../model/ModelsState';
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';
import BaseFormSection from '../../BaseForms/BaseForm/BaseFormSection';
import Quintegra_eHMMSummary from '../../../components/Results/Quintegra_eHMMSummary/Quintegra_eHMMSummary';
import { UserState } from '../../../model/UserState';

interface Props {
    user: UserState;
    models: BaseModel[];
    // modelSummary: BaseFormSection;
}

export default class Menu extends React.PureComponent<Props> {
    private className = 'menu';

    render() {
        const c = this.className;
        const { models } = this.props;
        const selected = models.filter(m => m.selected);

        return (
            // <div className={c}>
                <UncontrolledDropdown size="lg">
                    <DropdownToggle caret> Select a Model </DropdownToggle>
                    <DropdownMenu>
                        {selected.map(m => <DropdownItem onClick={this.handleModelSummary.bind(null, m.shortName)}> {m.shortName} </DropdownItem> )}
                    </DropdownMenu>
                </UncontrolledDropdown>
            // </div>

        );
    }

    public handleModelSummary = (model: string) => {
        return (
            <BaseFormSection
                header={`Let's see how your ${model} answers compare to others`}
                headerLarge={true}
                // subheader=
                    // {<span>
                    //     The Research Informatics Maturity Model uses a 5-point scoring system to benchmark an 
                    //     organization's overall and category-level maturity. The score corresponds to the five-level 
                    //     maturity continuum first proposed in the <a href='https://en.wikipedia.org/wiki/Capability_Maturity_Model' target='_'>Capability Maturity Model</a>.
                    // </span>}
                // content={<RIOSMSummary user={this.props.user} />}
                // content={<PrecisionHealthSummary user={this.props.user} />}
                content={<Quintegra_eHMMSummary user={this.props.user} />}
            />
        )
    }
}