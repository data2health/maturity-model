import React from 'react';
import { BaseModel } from '../../model/ModelsState';
import { UserState } from '../../model/UserState';
import { DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap';
import BaseFormSection from '../../components/BaseForms/BaseForm/BaseFormSection';
import ContentSummary from './ContentSummary/ContentSummary';

interface Props {
    user: UserState;
    models: BaseModel[];
}

interface State {
    model: string;
    show: boolean;
}

export default class Summary extends React.PureComponent<Props,State> {
    private className = 'results-summary';
    private selected = this.props.models.filter(m => m.selected);

    public constructor(props: Props) {
        super(props);
        this.state = {
            model: this.selected.length > 0 ? this.selected[0].shortName : '',
            show: false
        };
    };

    public render() {
        const c = this.className;
        const selected = this.selected;
        const { user } = this.props;
        const { model } =this.state;
        
        return (
            <BaseFormSection
                header={
                    selected.length > 0
                        ? <div>
                            <Dropdown isOpen={this.state.show} toggle={this.toggle}>
                                Let's see how your <DropdownToggle className={`${c}-dropdown-text`} tag="span"> {model} </DropdownToggle> answers compare to others
                                <DropdownMenu>
                                    {selected.map(m => <DropdownItem onClick={this.handleModelSummary.bind(null, m.shortName)}> {m.shortName} </DropdownItem> )}
                                </DropdownMenu>
                            </Dropdown>
                          </div>
                        : <div>No models selected</div>
                    }

                headerLarge={this.state.model ? true : false}
                subheader={this.getSubHeader(model)}
                content={<ContentSummary models={selected} model={this.state.model} user={user} />}
            />
        );
    };

    private toggle = () => {
        this.setState(prevState => ({
            show: !prevState.show
        }));
    };
    private handleModelSummary = (model: string) => {
        this.setState({
            model: model
        });
    };

    private getSubHeader = (model: string) => {
        if (model === 'RIOSM') {
            return (
                <span>
                    The Research Informatics Maturity Model uses a 5-point scoring system to benchmark an 
                    organization's overall and category-level maturity. The score corresponds to the five-level 
                    maturity continuum first proposed in the <a href='https://en.wikipedia.org/wiki/Capability_Maturity_Model' target='_'>Capability Maturity Model</a>.
                </span>
            );
        };
        return undefined;
    };
}