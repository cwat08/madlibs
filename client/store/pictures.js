import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PICTURES = 'GET PICTURES'
const SEARCH_PICTURES = 'SEARCH_PICTURES'

/**
 * INITIAL STATE
 */
const defaultPictures = []

/**
 * ACTION CREATORS
 */
//const getPictures = () => ({type: GET_PICTURES, pictures})
const searchPictures = pictures => ({type: SEARCH_PICTURES, pictures})

/**
 * THUNK CREATORS
 */
// export const fetchPictures = () => async dispatch => {
//   try {
//     const res = await axios.get(`/api/pictures/`)
//     dispatch(getPictures(res.data || defaultPictures))
//   } catch (err) {
//     console.error(err)
//   }
// }

export const searchPicturesThunk = word => async dispatch => {
  try {
    console.log('STORE**', word)
    const res = await axios.get(`/api/pictures/${word}`)
    console.log('ARRAY', Array.isArray(res.data))
    dispatch(searchPictures(res.data || defaultPictures))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultPictures, action) {
  switch (action.type) {
    case SEARCH_PICTURES:
      return action.pictures
    default:
      return state
  }
}
