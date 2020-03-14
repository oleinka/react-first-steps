import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import TwittersView from '../TwittersView/TwittersView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

const initialStateItems = [    
    {
        image: 'https://picsum.photos/200/300',
        name: 'Dan Abramov',
        description: 'Working on @reactjs. The demo guy.',
        twitterLink: 'https://twitter.com/dan_abramov',
    },
    {
        image: 'https://picsum.photos/200/300',
        name: 'Ryan Florence',
        description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
        twitterLink: 'https://twitter.com/ryanflorence',
    },
    {
        image: 'https://picsum.photos/200/300',
        name: 'Michael Jackson',
        description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
        twitterLink: 'https://twitter.com/mjackson',
    },
    {
        image: 'https://picsum.photos/200/300',
        name: 'Kent C. Dodds',
        description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
        twitterLink: 'https://twitter.com/kentcdodds',
    },
]

class Root extends React.Component {
        state = {
            items: [...initialStateItems],
            isModalOpen: false,
        }

        addItem = (e) => {
            e.preventDefault();

            const newItem = {
            name: e.target[0].value ,
            twitterLink: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value,
            }
            
            this.setState(prevState => ({
                items:[...prevState.items, newItem],
            }));

            e.target.reset();
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
            return (
            <BrowserRouter>
                <>
                <Header openModalFn={this.openModal}/>
                <Switch>
                    <Route exact path='/' component={TwittersView}/>
                    <Route path='/articles' component={ArticlesView}/>
                    <Route path='/notes' component={NotesView}/>
                </Switch>
                { isModalOpen && <Modal closeModalFn={this.closeModal}/> }
                </>
            </BrowserRouter>
            )
        }
    }

export default Root; 