/*
* import dependencies
*/
import React, {Component} from 'react';
import Note from './Note'

/*
*  definte the react Component class
*/

class Board extends Component {
    /*
    * Constructor method
    * Setup the world
    */
    constructor(props) {
        super(props);
        /*
        * define the react state object
        */
        this.state = {
            notes: [
                {
                    id: 0,
                    note: "Call Lisa",
                },
                {
                    id: 1,
                    note: "Email Jhon",
                },
                {
                    id: 2,
                    note: "Email Jhon",
                }
            ],
        }
        this.eachNote = this.eachNote.bind(this)
        this.update = this.update.bind(this)
    }

    /*
     * Update the targeted note
     */
    update (newText, i) {
        /*
        * Update the state object
        * return and object whit the key value pair to update
        * can take a callback function
        *** setState Usage example
        this.setState((state, props) => {
           return {counter: state.counter + props.step};
        });
        */
        this.setState(
            /*
            * map the state object
            * return a updated object
            */
            (prevState) => ({
                /*
                * Update Board state obj by pushing newText on to end
                * this event will triger the update
                * check if current el is new
                * by comparing index to el id
                */
                notes: prevState.notes.map(

                    note => (note.id !== i) ? note : {...note, note: newText},
                ),
            }))
    }

    /*
    * Sub routine
    * Zip data to Component Note (can be a API Call)
    * render each Note
    * Use whit a map function
    */
    eachNote (note, i) {
        return (
            // props list: index, key, note, onChange
            <Note key={i} index={i}
                note={note.note}
                change={this.update}
            >
                {note.note}
            </Note>
        )
    }

    /*
    * render the component
    */
    render() {
        return (
            <div className="board" style={{minHeight: 100 + "vh"}}>
                {/*render Each Note to the Board Components*/}
                {this.state.notes.map(this.eachNote)}
            </div>
        );
    }
}

/*
* expose the Board Component
*/

export default Board