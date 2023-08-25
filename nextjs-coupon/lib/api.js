import axios from "axios";

export default async function fetcher(url) {
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    throw error;
  }
}
