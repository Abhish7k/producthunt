"use client";

import Image from "next/image";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { PiCaretUpFill, PiChatCircle } from "react-icons/pi";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProductItemProps {
  product: any;
  authenticatedUser: any;
}

const ProductItem = ({ product, authenticatedUser }: ProductItemProps) => {
  const [hasUpvoted, setHasUpvoted] = useState(
    product.upvoters?.includes(authenticatedUser?.user.id)
  );

  const [totalUpvotes, setTotalUpvotes] = useState(product.upvotes || 0);

  const handleUpvoteClick = () => {
    setHasUpvoted(true);
  };

  const variants = {
    initital: { scale: 1 },
    upvoted: { scale: [1, 1.2, 1], transition: { duration: 0.3 } },
  };

  return (
    <div>
      <div className="group relative py-3 px-4 w-full cursor-pointer rounded-md">
        <div className="absolute inset-0 bg-gradient-to-bl from-[#ffe6d3] via-[#fdfdfd] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md" />

        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Image
              src={product.logo}
              alt="logo"
              width={1000}
              height={1000}
              className="h-14 w-14 rounded-md"
            />

            <div className="">
              <div className="md:flex items-center gap-x-2 gap-y-2">
                <h1 className="text-xl font-medium capitalize">
                  {product.name}
                </h1>
                <p className="hidden md:flex text-xs">-</p>
                <p className="text-foreground/70 text-sm md:text-base pr-2 font-medium">
                  {product.headline}
                </p>
                <div
                  // onClick={handleArrowClick}
                  className="hidden md:flex cursor-pointer"
                >
                  {/* <PiArrowBendDoubleUpRight /> */}
                  <CiGlobe className="hover:text-blue-500 transition-all duration-300" />
                </div>
              </div>

              <div className="hidden md:flex gap-x-2 items-center">
                <div className="text-xs text-gray-500 flex gap-x-1 items-center">
                  {product.commentsLength}
                  <PiChatCircle />
                </div>

                {product.categories.map((category: string) => (
                  <div
                    key={category}
                    className="text-xs md:text-sm text-gray-500 tracking-tight"
                  >
                    <div className="flex gap-x-1 items-center">
                      <div className="mr-1">•</div>
                      <Link
                        href={`/category/${category.toLowerCase()}`}
                        className="hover:underline"
                        //   onClick={handleCategoryClick}
                      >
                        {category}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-sm">
            <motion.div
              onClick={handleUpvoteClick}
              variants={variants}
              animate={hasUpvoted ? "upvoted" : "initital"}
            >
              {hasUpvoted ? (
                <div
                  className="border px-3 py-1 rounded-md flex flex-col items-center text-white font-medium
                  bg-gradient-to-bl from-[#ff6154] to-[#ff4582] border-[#ff6154]"
                >
                  <PiCaretUpFill className="text-xl -mb-1" />
                  {totalUpvotes}
                </div>
              ) : (
                <div className="border px-3 py-1 rounded flex flex-col items-center bg-white font-medium hover:bg-gray-50 transition-all duration-500">
                  <PiCaretUpFill className="text-xl -mb-1" />
                  <span className="text-sm">{totalUpvotes}</span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
