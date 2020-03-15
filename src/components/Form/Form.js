import React from 'react';
import styles from './Form.module.scss'; 
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import RadioButton from './RadioButton';

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
        activeOption: types.twitter,
    }
    handleRadioButtonChange = (type) => {
        this.setState({
        activeOption: type,
        })
    }

    render() {
        return (
            <div className={styles.wrapper}>
            <Title>Add new {description[this.state.activeOption]}</Title>
            <form autoComplete='off' className={styles.form} onSubmit={this.props.submitFn}>
                <div className={styles.radioInput}>
                    <RadioButton
                        id={types.twitter}
                        checked={this.state.activeOption === types.twitter}
                        changeFn={()=>this.handleRadioButtonChange(types.twitter)}
                    >
                        Twitter
                    </RadioButton>
                    <RadioButton
                        id={types.article}
                        checked={this.state.activeOption === types.article}
                        changeFn={()=>this.handleRadioButtonChange(types.article)}
                    >Article
                    </RadioButton>
                    <RadioButton
                        id={types.note}
                        checked={this.state.activeOption === types.note}
                        changeFn={()=>this.handleRadioButtonChange(types.note)}
                    >Note
                    </RadioButton>
                </div>
                <Input
                    name='name'
                    label="Name"
                    maxLength={30}
                />
                <Input
                    name='link'
                    label="Twitter Link"
                />
                <Input
                    name='image'
                    label="Image"
                />
                <Input
                    tag="textarea"
                    name='description'
                    label="Description"
                    maxLength={30}
                />
                <Button>add new item</Button>
            </form>
        </div>
    );
    }

}


export default Form; 