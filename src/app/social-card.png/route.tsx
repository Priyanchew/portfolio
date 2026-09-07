import SocialImage from "../opengraph-image";

export const dynamic = "force-static";

// A .png URL lets static hosts serve the image with the correct content type.
export function GET() {
  return SocialImage();
}
