export default {
    capitalize(string) {
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
    },
    ratedToSmall(string) {
        return string.split(' - ')[0];
    }
}