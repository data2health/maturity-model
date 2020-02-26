import React from 'react';
import { BaseModel } from '../../../model/ModelsState';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

interface Props {
    models: BaseModel[];
}

interface State {
    show: boolean;
}

export default class Menu extends React.PureComponent<Props,State> {
    private className = 'menu';

    public constructor(props: Props) {
        super(props);
        this.state = {
            show: false
        }
    }

  render() {
      const { models } = this.props;
      const { show } = this.state;
      const selected = models.filter(m => m.selected);

    return (
        <Dropdown size="lg" isOpen={show} toggle={this.toggleMenu}>
            <DropdownToggle caret> Models </DropdownToggle>
            <DropdownMenu>
                {selected.map(m => <DropdownItem> {m.name} </DropdownItem> )}
            </DropdownMenu>
        </Dropdown>

    );
  }

    private toggleMenu = () => {
        this.setState( prevState => ({
            show: !prevState.show
        }))
    }
}