import React, { Component } from 'react';
import { getGames } from '../services/FakeBackend';
import Like from './like';
import './style.css';
import Form from './form';


class Main extends Component {
   state = { Games: getGames() };

   handleDelete = game => {
      const Games = this.state.Games.filter(g => g.id !== game.id);
      this.setState({ Games: Games });
   };

   handleLike = game => {
      const Games = [...this.state.Games];
      const index = Games.indexOf(game);
      Games[index].liked = !Games[index].liked;
      this.setState({ Games });
   };

   renderTable() {
      const { length } = this.state.Games;

      if (length === 0) return <h2>There are no games in the database.</h2>;

      return (
         <React.Fragment>
            <h2>{this.state.Games.length} Games in database</h2>

            <table className='table'>
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Title</th>
                     <th>Price</th>
                     <th />
                     <th />
                     <th />
                  </tr>
               </thead>
               <tbody>
                  {this.state.Games.map(game => (
                     <tr key={game.id}>
                        <td>{game.id}</td>
                        <td>{game.name}</td>
                        <td>{game.price}$</td>
                        <td>
                           <Like
                              Like={game.liked}
                              onLike={() => this.handleLike(game)}
                           />
                        </td>
                        <td>{game.liked ? 'Liked' : 'Unliked'}</td>
                        <td>
                           <button
                              onClick={() => this.handleDelete(game)}
                              className='btn btn-danger btn-sm'
                           >
                              Delete
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </React.Fragment>
      );
   }

   render() {
      return (
         <div>
            <h1>Updated 3</h1>
            <React.Fragment>
               <Form />
            </React.Fragment>

            {this.renderTable()}

            <img src='/img/Omega2.jpg' alt='Omega' width='100%' />
            <div className='box'>
               <h1>Hi {this.yo}</h1>
               <button className='btn btn-danger'>Button</button>
            </div>
         </div>
      );
   }
}

export default Main;
