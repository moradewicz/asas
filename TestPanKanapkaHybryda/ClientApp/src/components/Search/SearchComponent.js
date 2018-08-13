import Autosuggest from "react-autosuggest";
import React from "react";
import TextField from "@material-ui/core/TextField";
import AutosuggestHighlightMatch from "autosuggest-highlight/match";
import AutosuggestHighlightParse from "autosuggest-highlight/parse";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const languages = [
  {
    name: "Revelo",
    address: "Ul. Pilota Stanislawa Wigury 4/6 | Revelo B&B, Łódź 90-301"
  },
  {
    name: "Quale Restaurant",
    address: "Narutowicza 48, Łódź 90-135, Polska"
  },
  {
    name: "Galicja",
    address: "Ogrodowa 19 a Rynek Manufaktury, Łódź 91-065, Polska"
  },
  {
    name: "Whiskey in the Jar",
    address: "Drewnowska 58 | Manufaktura, Łódź 91-002, Polska"
  },
  {
    name: "Ato Sushi",
    address: "ul. 6 Sierpnia 1, Łódź 90-606, Polska"
  },
  {
    name: "Ristorante Mare E Monti",
    address: "ul. Wigury 13, Łódź 90-302, Polska"
  },
  {
    name: "Sushi Zielony Chrzan",
    address: "Łódź, Żwirki 8"
  },
  {
    name: "Czarny Pieprz",
    address: "Łódź, ul.Ciasna 12, "
  },
  {
    name: "STREET ART DELUXE",
    address: "Łódź, Drewnowska 58,"
  },
  {
    name: "Żuron",
    address: "Łódź, Legionów 7"
  },
  {
    name: "Restauracja Amarant",
    address: "Łódź, Sienkiewicza 47, "
  },
  {
    name: "Esencja",
    address: "Łódź, Łucji 5a, "
  },
  {
    name: "Pod Papugami",
    address: "Łódź, Traktorowa 21, "
  },
  {
    name: "Pan Kanapka Catering",
    address: "Łódź"
  }
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_special_characters
const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return languages.filter(language => regex.test(language.name));
};

const getSuggestionValue = suggestion => suggestion.name;

function renderSuggestion(suggestion, { query }) {
  const suggestionText = `${suggestion.name} ${suggestion.address}`;
  const matches = AutosuggestHighlightMatch(suggestionText, query);
  const parts = AutosuggestHighlightParse(suggestionText, matches);

  return (
    <Paper style={{ marginTop: 10 }}>
      <Grid container spacing={30}>
        <Grid item>
          <ButtonBase style={{ margin: 10 }}>
            <img
              alt="complex"
              src="https://material-ui.com/static/images/grid/complex.jpg"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container style={{ margin: 10 }}>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant="subheading">
                {suggestion.name}
              </Typography>
              <Typography gutterBottom>Restauracja</Typography>
              <Typography color="textSecondary">
                {" "}
                {suggestion.address}
              </Typography>
            </Grid>
            <Grid item>
              <Typography style={{ cursor: "pointer" }}>
                More inforation
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subheading">--</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

// prettier-ignore
export default class SearchComponent extends React.Component { // eslint-disable-line no-undef
    constructor() {
      super();
  
      this.state = {
        value: '',
        suggestions: getSuggestions('')
      };
    }
  
    onChange = (event, { newValue }) => {
      this.setState({
        value: newValue
      });
    };
  
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value)
      });
    };
  
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };

     renderInputComponent = inputProps => (
        <TextField
    style={{
      width:'100%',
      fontSize:'16px'
    }}
    {...inputProps} />
      );

 
  
    render() {
      const { value, suggestions } = this.state;
      const inputProps = {
        placeholder: "Type something",
        value,
        onChange: this.onChange
      };
  
      return (
        <Autosuggest // eslint-disable-line react/jsx-no-undef
          suggestions={suggestions}
          renderInputComponent={this.renderInputComponent}
          
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
         
          inputProps={inputProps}
        />
      );
    }
  }
