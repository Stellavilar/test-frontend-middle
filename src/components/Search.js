import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router-dom';

export default function Search() {
  const history = useHistory();
  //Get all beers
  const [ beers, setBeers ] = useState([]);

  useEffect(() => {
      //Fetch all beers
    axios.get('beers?page=1&per_page=80')
      .then((res) => {
        setBeers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

    return (
        <div className="search">
            <Autocomplete
                id="beers-select"
                style={{ width: 200 }}
                options={beers}
                autoHighlight
                getOptionLabel={(option) => option.name}
                renderOption={(option) => (
                    <React.Fragment >
                    <div onClick={()=> history.push(`/details/${option.id}`)}  style={{ display:'flex', alignItems:'center', width:'100%'}}>
                        <img  style={{width: '20px', height: '70px', marginRight: '15px'}} src={option.image_url} alt="img" />
                    <p >{option.name} </p> 
                    </div>
                    </React.Fragment>
                )}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    label="Search a beer"
                    variant="outlined"
                    inputProps={{
                        ...params.inputProps,
                    }}
                    />
                )}
                />
            </div>
    )
}
