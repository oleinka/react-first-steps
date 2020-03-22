import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import TwittersView from '../TwittersView/TwittersView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import AppContext from '../../context' ;

class Root extends React.Component {
        state = {
            items: {
                twitters: [],
                articles: [],
                notes: [],
            },
            isModalOpen: false,
        }

        addItem = (e) => {
            e.preventDefault();
            console.log('działa');

            /*const newItem = {
            name: e.target[0].value ,
            twitterLink: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value,
            }
            
            this.setState(prevState => ({
                items:[...prevState.items, newItem],
            }));

            e.target.reset();*/
        }

        openModal = () => {
            this.setState({
                isModalOpen: true,
            })
        }

        closeModal = () => {
            this.setState({
                isModalOpen: false,
            })
        }

        render () {
            const {isModalOpen} = this.state;
            const contextElements = {...this.state,
            addItem: this.addItem
            }
            
            return (
            <BrowserRouter>
                <AppContext.Provider value={contextElements}>
                <Header openModalFn={this.openModal}/>
                <Switch>
                    <Route exact path='/' component={TwittersView}/>
                    <Route path='/articles' component={ArticlesView}/>
                    <Route path='/notes' component={NotesView}/>
                </Switch>
                { isModalOpen && <Modal closeModalFn={this.closeModal}/> }
                </AppContext.Provider>
            </BrowserRouter>
            )
        }
    }

export default Root; 