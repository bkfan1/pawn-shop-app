import { getSettings, createSettings, updateSettings } from "../../../middleware";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getSettings(req, res);
      break;
    case "POST":
        return await createSettings(req, res);
        break;
    case "PUT":
      return await updateSettings(req, res);
      break;

    default:
      res.status(403).json({ error: "Method not allowed." });
      break;
  }
}
