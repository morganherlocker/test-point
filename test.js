var test = require('tape')
var pt = require('./point.json')

test('load point', function(t){
  t.ok(pt, 'point loaded')
  t.ok(pt.geometry.coordinates, 'coordinates loaded')

  t.end()
})