ServerEvents.recipes(event => {
    event.remove({ output: '#quark:hedges'})
    console.log('Hello! The hedges have been slaughtered! Praise the almighty Fayne!')
  })