import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState(""),
    [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    //price === '$' || '$$' || '$$$' || '$$$$'
    return results.filter(results => {
      return results.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length}</Text>
      <ScrollView>
        <ResultsList results={filterResultsByPrice("$")} title='Cheap' />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title='Medium priced'
        />
        <ResultsList
          results={filterResultsByPrice(undefined)}
          title='Uncategorized'
        />
        <ResultsList results={filterResultsByPrice("$$$")} title='Expensive' />
        <ResultsList
          results={filterResultsByPrice("$$$$")}
          title='Highest priced'
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
