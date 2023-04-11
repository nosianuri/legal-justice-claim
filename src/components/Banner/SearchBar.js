import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import _ from 'lodash';

const SearchBar = () => {
  // state to hold the search value
  const [searchValue, setSearchValue] = useState('');

  // data for suggestions
  const suggestions = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'orange' },
    { id: 4, name: 'pear' },
    { id: 5, name: 'pineapple' },
    { id: 6, name: 'watermelon' },
  ];

  // function to handle the input change
  const handleInputChange = (event, { newValue }) => {
    setSearchValue(newValue);
  };

  // function to render the suggestion item
  const renderSuggestion = suggestion => (
    <div>
      {suggestion.name}
    </div>
  );

  // function to get suggestions based on input value
  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : suggestions.filter(suggestion =>
      suggestion.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  // function to handle the suggestion selection
  const handleSuggestionSelected = (event, { suggestion }) => {
    setSearchValue(suggestion.name);
  };

  // options for the autosuggest component
  const autosuggestProps = {
    suggestions: getSuggestions(searchValue),
    onSuggestionsFetchRequested: _.debounce(() => {}, 500),
    onSuggestionsClearRequested: () => {},
    getSuggestionValue: suggestion => suggestion.name,
    renderSuggestion,
    onSuggestionSelected: handleSuggestionSelected,
  };

  return (
    <Autosuggest
      inputProps={{ placeholder: 'Search for fruits...', value: searchValue, onChange: handleInputChange }}
      {...autosuggestProps}
    />
  );
};

export default SearchBar;
