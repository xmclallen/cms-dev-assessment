import React, {Component} from 'react';

class Post extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="post-image">
                <img src={this.props.imgurl}></img>
                </div>
                <div className="post-body">
                    <p className="post-title">Lorem Ipsum Dolor Sit Amet</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Teneo, inquit, finem illi videri nihil dolere. <i>Recte, inquit, intellegis.</i> Non semper, inquam; <a href="http://loripsum.net/" target="_blank">Et ille ridens: Video, inquit, quid agas;</a> Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; Sed vos squalidius, illorum vides quam niteat oratio. <a href="http://loripsum.net/" target="_blank">Duo Reges: constructio interrete.</a> </p>
                </div>
            </React.Fragment>
        );
    }
}
  
export default Post;
  