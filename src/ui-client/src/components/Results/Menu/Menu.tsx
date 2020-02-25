import React, { createRef } from 'react';
import { BaseModel } from '../../../model/ModelsState';

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
    
    private toggleMenu() {
        if (!this.state.show) {
            document.addEventListener('click', this.handleOutsideClick, false);
          } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
          }
        this.setState( prevState => ({
            show: !prevState.show
            // document.addEventListener('click', this.handleCloseMenu);
        }))
    }
  
    private handleOutsideClick(e) {
        if (this.node.contains(e.target)) {
            return;
        }
          
        this.toggleMenu();

        // this.setState({
        //     show: false
        // })
    }

  render() {
      const { models } = this.props;
      const { show } = this.state;
      const selected = models.filter(m => m.selected);
    return (
      <div ref={node => { this.node = node; }}>
        <button onClick={() => this.toggleMenu()}> Models </button>
        {show ? <div> {selected.map(m => <button>{m.name}</button>)} </div> : this.handleClickOutside()}
      </div>
    );
  }
}