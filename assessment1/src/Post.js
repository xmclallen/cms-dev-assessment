import React, {Component} from 'react';

class Post extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="post-image">
                <img className="w-100 h-50" src="http://via.placeholder.com/500"></img>
                </div>
                <div className="h-50 post-body">
                    <p><b>Lorem Ipsum Dolor Sit Amet</b></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Teneo, inquit, finem illi videri nihil dolere. <i>Recte, inquit, intellegis.</i> Non semper, inquam; <a href="http://loripsum.net/" target="_blank">Et ille ridens: Video, inquit, quid agas;</a> Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; Sed vos squalidius, illorum vides quam niteat oratio. <a href="http://loripsum.net/" target="_blank">Duo Reges: constructio interrete.</a> </p>
                </div>
            </React.Fragment>
        );
    }
}
  
export default Post;
  