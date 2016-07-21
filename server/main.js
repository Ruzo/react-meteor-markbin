import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
  // code to run on server at startup
    Meteor.publish('bins', function(){
      return Bins.find({ownerId: this.userId});
    });

    Meteor.publish('sharedBins', function() {
      if(this.userId){
        const user = Meteor.users.findOne({_id: this.userId});
        if(user){
          return Bins.find({sharedWith: user.emails[0].address});
        }
      }
    })
});
