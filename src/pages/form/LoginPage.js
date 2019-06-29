import LoginForm from 'src/pages/form/LoginForm'
import {STATE_LOGIN} from "../../utils/Authority";
class LoginPage extends React.Component{
    state={
        isLogin: false,
        pageTo: STATE_LOGIN,
        isAdmin: false,
    };

    handleSetLogin = () =>{
        setState({
            isLogin:true
        })
    }

    handleIsAdmin = ()=>{
        setState({
            isAdmin:true
        })
    }
    ///.....

    render(){
        return(
            <div></div>
        )
    }


}