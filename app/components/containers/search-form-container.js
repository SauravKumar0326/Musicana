import React from 'react';
import * as userApi from '../../api/user-api';
import { loadSearchLayout } from '../../actions/search-layout-actions';
import SearchForm from '../views/search-form';
import { connect } from 'react-redux';
import store from '../../store';

const SearchFormContainer = React.createClass({
/*
**Implements search function for dropdownUsers suggestion
**Calls the seach api based on the search type
*/
  searchDropdown:function(event) {
    event.preventDefault();
    let query;
    if(typeof(event) == 'object' && event.target){
      query = event.target.value;
    }

    if (this.props.searchType === 'users') {
      userApi.searchDropdownUsers(query);
    }
  },
  /*
  **Implements search function for user-list
  **Calls the seach api based on the search type
  */
  search: function(event) {
    event.preventDefault();

    // By assigning a "child" ref to <SearchForm />, we
    // can use that reference to gain access to the
    // .getQuery() method. See the code for
    // <SearchForm /> to see how it returns a value.
    let query = this.refs.child.getQuery();

    if (this.props.searchType === 'users') {
      userApi.searchUsers(query);
    }
  },

  render: function() {
    //console.log("testing"+this.props);
    return (
      //passing dropdownUsers,searchDropdown and search as props to the view
      <SearchForm dropdownUsers={this.props.dropDownUsers} searchDropdown={this.searchDropdown} search={this.search} ref="child" />
    );
  }

});
/*
** Maps dropDownUsers from the store
*/
const mapStateToProps = function(store) {
  return {
    dropDownUsers: store.userState.dropDownUsers
  };
};
//export default SearchFormContainer;
export default connect(mapStateToProps)(SearchFormContainer);
