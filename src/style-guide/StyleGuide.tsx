import * as React from 'react';
import './StyleGuide.scss';
import { Button } from '../commons/button/Button';
import { Loader } from '../commons/loader/Loader';


interface Props {}

interface State {
  loading: boolean;
}
class StyleGuide extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  submit = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
      alert('submitted');
    }, 3000);
  }

  testButtonFunction = ():void => {
    alert('action');
  }

  render() {
    return (
      <div className="style-guide">
        <div className="style-guide__section">
          <div className="style-guide__item">
            <Button htmlType="submit">Default</Button>
          </div>
          <div className="style-guide__item">
            <Button
              disabled={true}
              className={`button_primary`} 
              onClick={this.testButtonFunction}>Disabled</Button>
          </div>
          <div className="style-guide__item">
            <Button
              className={`button_primary`} 
              onClick={this.testButtonFunction}>Primary</Button>
          </div>
          <div className="style-guide__item">
            <Button
              className={`button_alert`} 
              onClick={this.testButtonFunction}>Alert</Button>
          </div>
          <div className="style-guide__item">
            <Button
              className={`button_success`} 
              onClick={this.testButtonFunction}>Success</Button>
          </div>
          <div className="style-guide__item">
            <Button
              onClick={this.submit}
              className={`button_success`} 
              loading={this.state.loading}>Submit</Button>
          </div>
        </div>
        <div className="style-guide__section">
          <div className="style-guide__item">
            <Loader></Loader>
          </div>
          <div className="style-guide__item">
            <Loader disabled={true}></Loader>
          </div>
          <div className="style-guide__item">
            <Loader className="loader_alert"></Loader>
          </div>
          <div className="style-guide__item">
            <Loader className="loader_success"></Loader>
          </div>
          <div className="style-guide__item">
            <Loader className="loader_alert loader_big"></Loader>
          </div>
          <div className="style-guide__item">
            <Loader className="loader_success loader_big">Loading</Loader>
          </div>
        </div>
      </div>
    );
  }
}


export default StyleGuide;
