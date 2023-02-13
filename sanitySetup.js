import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
export default sanityClient({
    projectId: PROJECT_ID,
    dataset: DATASET_NAME,
    useCdn: true
});