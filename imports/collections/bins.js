import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

Meteor.methods({
  'bins.insert': function(){
    if(this.userId){
      const user = Meteor.users.findOne({_id: this.userId});
      if(!user) return;
      return Bins.insert({
        createdAt: new Date(),
        markdown: '',
        sharedWith: [],
        ownerId: this.userId,
        ownerEmail: user.emails[0].address
      });
    } else {
      return this.ready();
    }
  },

  'bins.delete': function(id){
    return Bins.remove(id);
  },

  'bins.markdown.update': function(bin, content){
    return Bins.update({_id: bin._id}, {$set: {markdown: content}});
  }
});

export const Bins = new Mongo.Collection('bins');