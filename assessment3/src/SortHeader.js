import React, {Component} from 'react';

class SortHeader extends Component {
    
    
    buttonClicked(str){
        alert(str);
    }

    render(){
        return(
            <div class="sort-header row">
            <div class="col-sm-1" ><button class="btn btn-primary btn-md active" onClick={this.buttonClicked.bind(this, "all")} >All</button></div>
            <div class="col-sm-1" ><button class="btn btn-secondary btn-md active" onClick={this.buttonClicked.bind(this, "Listings")} >Listings</button></div>
            <div class="col-sm-1" ><button class="btn btn-secondary btn-md active" onClick={this.buttonClicked.bind(this, "Events")} >Events</button></div>
            <div class="col-sm-1" ><button class="btn btn-secondary btn-md active" onClick={this.buttonClicked.bind(this, "Offers")} >Offers</button></div>
          </div>
        );
    }
}

export default SortHeader;