export default {
    sleep(delay, { signal } = {}) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(resolve, delay)

            signal?.addEventListener(
                'abort',
                () => {
                    clearTimeout(timer)
                    reject(signal.reason)
                },
                { once: true }
            )
        })
    }
}