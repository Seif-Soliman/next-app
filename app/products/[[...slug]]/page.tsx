import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { searchQuery: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { searchQuery },
}: Props) => {
  return (
    <div>
      ProductPage {slug} {searchQuery}
    </div>
  );
};

export default ProductPage;
