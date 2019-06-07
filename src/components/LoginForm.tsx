import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from '../commons/button/Button';
import { signIn } from '../actions';
import { ActionSignInData } from '../reducers/signIn';

interface State {
  email: string;
  password: string;
}
   
interface Props {
  signIn: (email: string, password: string) => void;
  loading: boolean;
  errorText: string;
  error: boolean;
}


class LoginForm extends React.Component<Props, State> {
  state = {
    email: '',
    password: ''
  }

  get disabled(): boolean {
    return !this.state.email || !this.state.password;
  }

  login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { signIn } = this.props;
    signIn(email, password);
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    let { email, password } = this.state;
    let { loading } = this.props;
    return (
      <div className="login">
        <form onSubmit={this.login}>
          <input 
            onChange={(e) => this.setState({ email: e.target.value })} 
            value={email} 
            type="text"/>
          <input 
            onChange={(e) => this.setState({ password: e.target.value })} 
            value={password} 
            type="text"/>
          <Button 
            loading={loading}
            disabled={this.disabled} 
            className="button_primary" 
            htmlType="submit">
            Войти
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: {signIn: ActionSignInData}) => {
  return {
    loading: state.signIn.loading,
    errorText: state.signIn.errorText,
    error: state.signIn.error
  } 
}

const mapDispatchToProps = { 
  signIn 
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);