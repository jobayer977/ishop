import { Card, Col, Input, PageHeader, Row } from "antd"
import React, { useEffect } from "react"

import { IFBrand } from "@shared/interfaces/brand.interface"
import Image from "next/image"
import Link from "next/link"
import { routeConstant } from "@shared/constant/routes.constant"
import { useRouter } from "next/router"

interface IFProps {
	brands: IFBrand[]
}

const { Search } = Input

const HomeBrandsComponent: React.FC<IFProps> = ({ brands }) => {
	const router = useRouter()
	useEffect(() => {
		router.prefetch("/search")
	}, [])
	return (
		<div className="ruby-container ">
			<div className="border-section">
				<PageHeader className="site-page-header" title="Shop By Brand" />

				<Row gutter={16} style={{ padding: 10, paddingBottom: 0 }}>
					{brands?.map((brand: IFBrand) => (
						<Col span={4} xxl={4} xl={4} md={6} sm={12} xs={12} key={brand?.id}>
							<Link
								href={{
									pathname: routeConstant.brandId,
									query: {
										id: brand.id,
									},
								}}>
								<a>
									<Card
										className="logo-itm-bx"
										style={{ marginBottom: 16 }}
										cover={
											<Image
												src={String(brand?.image)}
												alt="Picture of the author"
												width={500}
												height={500}
											/>
										}>
										<Meta title={brand?.name} />
									</Card>
								</a>
							</Link>
						</Col>
					))}
				</Row>
			</div>
		</div>
	)
}

export default HomeBrandsComponent

const { Meta } = Card
