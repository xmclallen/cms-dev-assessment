const the_posts = [];

const sample_post = {
    title: 'Lorem Ipsum Dolor Sit Amet',
    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Teneo, inquit, finem illi videri nihil dolere. <i>Recte, inquit, intellegis.</i> Non semper, inquam; <a href="http://loripsum.net/" target="_blank">Et ille ridens: Video, inquit, quid agas;</a> Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; Sed vos squalidius, illorum vides quam niteat oratio. <a href="http://loripsum.net/" target="_blank">Duo Reges: constructio interrete.</a> ',
    imgurl: 'http://via.placeholder.com/500'
    };

var i;
for(i=0; i<6; i++){
    the_posts.push(sample_post);
}
the_posts[0].imgurl = 'http://via.placeholder.com/700';

export default the_posts;