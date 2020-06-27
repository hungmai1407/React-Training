import React from 'react'
import './Form_Reg.css'
class Form_Register extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            Name: '',
            Email: '',
            PhoneNumber:'',
            Password: '',
            Avatar: '',
            Gender: 'Male',
            Age: 1,
            Note: '',
            Favorite: []
            }
        }

    onChangeFavorite = (value) => {
        let New_Favorite = Array.from(this.state.Favorite)
        if( New_Favorite.indexOf(value) === -1){
            New_Favorite.push(value)
            console.log('New_Favorite',New_Favorite)
            console.log('Add success!' ,value)
        }else{
            let index = New_Favorite.findIndex( item => item === value )
            New_Favorite.splice(index,1)
            this.setState({Favorite: New_Favorite})
            console.log('Remove success!' ,value)
            console.log('New_Favorite',New_Favorite)
        }
        this.setState({Favorite: New_Favorite})
    }

    onChangeGenger = (value) => {
        this.setState({Gender: value})
    }

    HandleChangeInput = (event) => {
        let Value = event.target.value
        let Name = event.target.name
        this.setState({ [Name]: Value })
    }

    onSubmit = () => {
        console.log(this.state)
    }

    render() {

        return (
        <div className="form_register">
            <h1>Đăng kí thành viên</h1>
            <form>
            <table border={1}>

                <thead>
                <tr>
                    <th>
                    Nội dung
                    </th>
                    <th>
                    Giá trị
                    </th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>
                    <label htmlFor="Name"> Họ tên:</label>
                    </td>
                    <td > <input name='Name' type="text" id="Name" onChange={ (e) => this.HandleChangeInput(e) } />
                    </td>
                </tr>
                <tr>
                    <td>
                    <label htmlFor="Email"> Email:</label>
                    </td>
                    <td > <input name="Email" type="email" id="Email" onChange={ (e) => this.HandleChangeInput(e) } />
                    </td>
                </tr>
                <tr>
                    <td>
                    <label htmlFor="Password"> Mật khẩu:</label>
                    </td>
                    <td > <input type='password' name="Password" id="Password" onChange={ (e) => this.HandleChangeInput(e) } /> </td>
                </tr>
                <tr>
                    <td>
                    <label htmlFor="Avatar"> Avatar:</label>
                    </td>
                    <td > <input name='Avatar' type="file" id="Avatar" onChange={ (e) => this.HandleChangeInput(e) } /> </td>
                </tr>
                <tr>
                    <td>
                    <label htmlFor="PhoneNumber"> Số điện thoại:</label>
                    </td>
                    <td > <input  name="PhoneNumber" type="number" id="PhoneNumber" onChange={ (e) => this.HandleChangeInput(e) } />
                    </td>
                </tr>
                <tr>
                    <td>
                    <label htmlFor="Age"> Tuổi:</label>
                    </td>
                    <td > <input name="Age" type="number" id="Age" onChange={ (e) => this.HandleChangeInput(e) } />
                    </td>
                </tr>
                <tr>
                    <td>
                    <label htmlFor="Gender"> Giới tính:</label>
                    </td>
                    <td >
                    <label>
                    <input name="Gender" type="radio" value="Male" onClick={ (e) => this.onChangeGenger(e.target.value) } /> Male
                    </label> <br />
                    <label>
                    <input name="Gender" type="radio" value="Female" onClick={ (e) => this.onChangeGenger(e.target.value) }  /> Female
                    </label>
                    </td>
                </tr>
                <tr>
                    <td>
                    <label htmlFor="favorite"> Sở thích:</label>
                    </td>
                    <td >
                    <label >
                    <input name="favorite" type="checkbox" value="Đá bóng" onClick={ (e) => this.onChangeFavorite(e.target.value) }/> Đá bóng
                    </label> <br />
                    <label >
                    <input name="favorite" type="checkbox" value="Cầu lông" onClick={ (e) => this.onChangeFavorite(e.target.value) } /> Cầu lông
                    </label><br />
                    <label >
                    <input name="favorite" type="checkbox" value='Đua thuyền' onClick={ (e) => this.onChangeFavorite(e.target.value) } /> Đua thuyền
                    </label>
                    </td>
                </tr>
                <tr>
                    <td>
                    <label htmlFor="Note"> Ghi chú </label>
                    </td>
                    <td > <textarea id="Note" name="Note" onChange={ (e) => this.HandleChangeInput(e) } > </textarea>
                    </td>
                </tr>
                </tbody>
            </table>
            <p  onClick={ () => this.onSubmit() } >Submit</p>
            </form>
        </div>)
    }
}

export default Form_Register