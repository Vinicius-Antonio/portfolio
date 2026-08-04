import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        observer.unobserve(entry.target)
      }
    }, {
      threshold: 0.15,
      ...options
    })

    const element = ref.current
    if (element) {
      element.classList.add('reveal')
      observer.observe(element)
    }

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [options])

  return ref
}
