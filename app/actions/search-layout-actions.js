import * as types from '../actions/action-types';


/*
**Loads the Search Layout
* @param :searchType
*  The type of search from the store.
* @param :title
*  The title of search.
* @return :type,searchType and title
*
*/
export function loadSearchLayout(searchType, title) {
  return {
    type: types.LOAD_SEARCH_LAYOUT,
    searchType,
    title
  };
}
