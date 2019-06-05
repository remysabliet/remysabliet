import renderApp from '../../test/render-app'

it('Should render the Homepage', () => {
  const { container, store } = renderApp({ route: '/' }) // Corresponds to HomePage's route.

  // We test our application to contain a canvas
  // const canvas = container.querySelector('canvas')

  /* We test that our page contains an element containins the ".foreground" CSS class name.*/
  const foreground = container.querySelector('.foreground')
  expect(foreground).not.toEqual(null) // OR expect(foreground).toBeTruthy()

  // Because it is a test, no device should be found by Util/whichDevice(js), then expected result is null
  // console.log(store.getState().deviceInfo)
  expect(store.getState().deviceInfo).toBe(null)
})
