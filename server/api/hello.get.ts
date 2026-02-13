export default defineEventHandler((event) => {
  const { page } = getQuery(event)
  return { message: `Hello from ${page || 'home'}`, timestamp: Date.now() }
})
