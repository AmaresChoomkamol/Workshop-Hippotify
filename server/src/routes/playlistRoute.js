import express from 'express';
import * as playlistController from '../controllers/playlistController.js'

const playlistRoute = express.Router();

playlistRoute.get('/owned', playlistController.getOwnedPlaylist);
playlistRoute.get('/', playlistController.getUserPlaylists);


export default playlistRoute;