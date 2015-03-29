window.$ = window.jQuery = require('jquery')
require('semantic-ui-css/semantic')
var React = require('react/addons')
var Router = require('react-router')
var Header = require('./header')


var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var Routes = Router.Routes;
var RouteHandler = Router.RouteHandler;

var About = React.createClass({
  render() {
  return (
    <div className="column">
      <div className="ui segment">
        <h4 className="ui black header">This is the about page.</h4>
      </div>
    </div>
    );
    }
    });


var Main = React.createClass({
                              render() {
                              return (
    <div>
      <Header/>
      <div className="ui page grid">
        <this.props.activeRouteHandler/>
      </div>
    </div>
    );
    }
    });

 var data =   [ {
         title: "Rebuild: 85: Virtual Reality, The Final Frontier (naan, hak)",
         link: "http://rebuild.fm/85/",
         favicon_url: "http://favicon.st-hatena.com/?url=http://rebuild.fm/85/",
         comment: "",
         count: "7",
         datetime: "2015-03-28T16:40:18+09:00",
         created_at: "5時間前",
         user:

         {
             name: "miyagawa",
             profile_image_url: "http://www.st-hatena.com/users/mi/miyagawa/profile.gif"
         },
         permalink: "http://b.hatena.ne.jp/miyagawa/20150328#bookmark-245781291",
         description: "Kazuho Okui さん、Hakuro Matsuda さんをゲストに迎えて、マラソン、MacBook, Google I/O, Facebook F8, VR, マトリックス、Apple Car などについて話しました。 スポンサー: DroidKaigi Show Notes San Francisco Rock 'n' Roll Half Marathon Race 2015 Apple... ",
         thumbnail_url: "http://cdn-ak.b.st-hatena.com/entryimage/245781291-1427528461.jpg"

     }
     ];


var IssueList = React.createClass({

  propTypes: {
    bookmarks: React.PropTypes.array.isRequired,
    onPressBookmark: React.PropTypes.func.isRequired
  },
  render: function() {

    var list = this.props.data.map(
        function(b) {
          return (
            <Issue bookmark={b} />
          )
        }
    );

console.log(list);
    return (
          <div className="ui">
          {list}
          </div>
    );
  }
});


var Issue = React.createClass({
    displayName: 'Issue',
    onClick: function () {
        window.location = this.props.bookmark.permalink;
    },
    render: function () {

        var bookmark = this.props.bookmark;

        return (
            <div className="ui teal segment">
                <div className="ui label">{bookmark.title}</div>
              <img
                src={bookmark.profile_image_url}
                className="ui small image"
              />
              <div className="ui">
                <div className="ui ">{bookmark.user.name}</div>
                <img
                  src={bookmark.user.favicon_url}
                  className="ui small image"
                />
              </div>
            </div>
        );

      }


});


var Home = React.createClass({
                              render() {
                              return (
    <div className="column">
      <div className="ui segment">
        <h1 className="ui header">
          <span>Get to work!</span>
          <div className="sub header">
            <IssueList data={data}/>
          </div>
        </h1>
      </div>
    </div>
    );
    }
    });


var routes = (
  <Routes location="hash">
    <Route path="/" handler={Main}>
      <DefaultRoute name="home" handler={Home}/>
      <Route name="about" handler={About}/>
    </Route>
  </Routes>
)

$(function() {
	  return React.renderComponent(routes, document.body);
});

