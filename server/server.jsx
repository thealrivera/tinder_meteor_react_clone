// if (MyData.find().count() === 0) {
//   _.each(_.range(25), function(){
//     MyData.insert({
//       name: faker.name.findName(),
//       email: faker.internet.email(),
//       avatar: faker.image.avatar()
//     });
//   });
// }
if (MyData.find().count() === 0) {
  _.each(_.range(25), function() {
    MyData.insert({
      name: faker.name.findName(),
      image: faker.image.people() + "?" + Random.hexString(24),
      details: faker.lorem.sentence()
    })
  })
}
Meteor.startup(function() {
  ServiceConfiguration.configurations.remove({
    service: "twitter"
  });
  ServiceConfiguration.configurations.insert({
    service: "twitter",
    consumerKey: Meteor.settings.public.twitter.consumerKey,
    loginStyle: "popup",
    secret: Meteor.settings.twitter.consumerSecret
  });
})
Meteor.publish("myData", function() {
  return MyData.find()
})