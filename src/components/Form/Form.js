import React from 'react';
import styles from './Form.module.scss'; 
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import RadioButton from './RadioButton';
import AppContext from '../../context';

const types = {
    twitter:'twitter',
    article: 'article',
    note:'note',
}
const description = {
    twitter:'favorite Twitter account',
    article: 'Article',
    note:'Note',
}

class Form extends React.Component {
    state = {
        type: types.twitter,
        title: '',
        link:'',
        image:'',
        description:'',
    }
    handleRadioButtonChange = type => {
        this.setState({
        type: type,
        })
    }

    handleInputChange = event => {
        this.setState({
        [event.target.name]: event.target.value,
        });
    };

    render() {
        const {type} = this.state;

        return (
        <AppContext.Consumer>
        {(context)=>(
            <div className={styles.wrapper}>
            <Title>Add new {description[type]}</Title>
            <form autoComplete='off' className={styles.form} onSubmit={context.addItem}>
                <div className={styles.radioInput}>
                    <RadioButton
                        id={types.twitter}
                        checked={type === types.twitter}
                        changeFn={()=>this.handleRadioButtonChange(types.twitter)}
                    >
                        Twitter
                    </RadioButton>
                    <RadioButton
                        id={types.article}
                        checked={type === types.article}
                        changeFn={()=>this.handleRadioButtonChange(types.article)}
                    >Article
                    </RadioButton>
                    <RadioButton
                        id={types.note}
                        checked={type === types.note}
                        changeFn={()=>this.handleRadioButtonChange(types.note)}
                    >Note
                    </RadioButton>
                </div>
                <Input
                    onChange={this.handleInputChange}
                    value={this.state.title}
                    name='title'
                    label={type === types.twitter ? 'Twitter name' : 'Title'}
                    maxLength={30}
                />
                {type !== types.note ? (
                <Input
                    onChange={this.handleInputChange}
                    value={this.state.link}
                    name='link'
                    label={type === types.twitter ? 'Twitter link' : 'Link'}
                />) : null }
                {type === types.twitter ? 
                <Input 
                    onChange={this.handleInputChange}
                    value={this.state.image}
                    name='image' label='image'/> : null }
                <Input
                    onChange={this.handleInputChange}
                    value={this.state.description}
                    tag="textarea"
                    name='description'
                    label="Description"
                    maxLength={30}
                />
                <Button>add new item</Button>
            </form>
        </div>
        )}
        </AppContext.Consumer>
    );
    }

}


export default Form; 