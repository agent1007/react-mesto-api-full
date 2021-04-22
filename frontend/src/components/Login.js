import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Login( {onLogin} ) {

    const initialData = {
        email: '',
        password: ''
      }

    const [data, setData] = useState(initialData);
    const history = useHistory();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData(data => ({
            ...data,
          [name]: value 
        }))
      }

    const resetForm = () => {
        setData(initialData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!data.password || !data.email) {
            return;
        }
        onLogin(data)
        .then(resetForm)
        .then(() => history.push('/'))
        .catch(err => console.log(err))
    }
    return (
      <div className="login">
        <h2 className="login__title">Вход</h2>
        <form className="login__form" onSubmit={handleSubmit}>
        <input 
            type="email" name='email' className="login__input" id="email"
            value={data.email}
            onChange={handleChange}
            required minLength={2} maxLength={40} placeholder="Email" 
        />
        <span 
            id="email-error" 
            className="error" 
        />
        <input 
            type="password" name='password' className="login__input" id="password" required minLength={2} 
            maxLength={30} placeholder="Пароль" 
            value={data.password}
            onChange={handleChange}
        />
        <span 
            id="password-error" 
            className="error" 
        />    
        <button 
            type="submit" 
            className="login__submit-button"
            >Войти
        </button>
        </form>
        
      </div>
    );
  }
  
  export default Login;