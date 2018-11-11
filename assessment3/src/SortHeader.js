import React, {Component} from 'react';

class SortHeader extends Component {
    render(){


        return(
            <div class="sort-header row">
            <div class="col-sm-1" ><button class="btn btn-primary btn-md active">All</button></div>
            <div class="col-sm-1" ><button class="btn btn-secondary btn-md active">Listings</button></div>
            <div class="col-sm-1" ><button class="btn btn-secondary btn-md active" role="button">Events</button></div>
            <div class="col-sm-1" ><button class="btn btn-secondary btn-md active" role="button">Offers</button></div>
          </div>
        );
    }
}

export default SortHeader;