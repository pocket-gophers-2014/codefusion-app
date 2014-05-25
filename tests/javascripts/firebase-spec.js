describe ( "FireBaseController", function() {
  beforeEach(function() {
    fb =  new Firebase("https://radiant-fire-3325.firebaseio.com/test_rooms")
  })

  it("Firebase successfully listens to a network update", function() {

    fb.once("value", function(data) {
      expect(data.val()["classroom_code"]).toEqual("test")
    })
    newClassroom = fb.set({ classroom_code: "test", file_content: "def test 3 method end", file_name: "test_99.rb" })

  })
})
