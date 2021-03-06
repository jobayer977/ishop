import { Button, Comment, PageHeader, Tabs, Typography } from "antd"
import React, { useEffect, useState } from "react"

import AppLayoutComponent from "@shared/components/layout/app-layout.component"
import { BaseResponse } from "@shared/interfaces/base.interface"
import OrdersComponent from "@modules/user/components/orders.component"
import { Purify } from "@shared/components/purify.component"
import { UserService } from "@shared/services/user.service"
import UserUpdateComponent from "@modules/user/components/user-update.component"
import { routeConstant } from "@shared/constant/routes.constant"
import { useRouter } from "next/router"
import useService from "@shared/hooks/useService"
import withAuth from "@shared/components/withAuth.component"

const { Title } = Typography

const { TabPane } = Tabs
const routes = [
	{
		path: routeConstant.root,
		breadcrumbName: "Home",
	},
	{
		path: routeConstant.myAccount,
		breadcrumbName: "My account",
	},
]

const MyAccount = () => {
	const router = useRouter()
	const [useInfo, setUseInfo] = useState<any>({})

	const getCurrentUseInfoService = useService(
		UserService.getCurrentUser,
		(res: BaseResponse) => {
			setUseInfo(res.data)
		}
	)

	useEffect(() => {
		getCurrentUseInfoService.query({})
	}, [])

	const logout = () => {
		router.push(routeConstant.root)
		localStorage.removeItem("token")
	}
	return (
		<AppLayoutComponent>
			<div className="ruby-container">
				<PageHeader
					className="inner-page-header"
					title="My Account"
					breadcrumb={{ routes }}
				/>

				<Purify loading={getCurrentUseInfoService.loading} empty={false}>
					<Comment
						author={<h1>Howdy, {useInfo?.firstName} </h1>}
						content={<p>{useInfo?.email}</p>}
					/>
					<Button type="primary" onClick={logout}>
						Logout
					</Button>
					<Tabs
						className="user-account-tabs"
						defaultActiveKey="1"
						tabPosition="top">
						<TabPane tab="Basic Information" key="1">
							<Title style={{ marginBottom: 50 }} level={5}>
								Basic Information
							</Title>
							<UserUpdateComponent userInfo={useInfo} />
						</TabPane>
						<TabPane tab="Orders" key="2">
							<OrdersComponent />
						</TabPane>
					</Tabs>
				</Purify>
			</div>
		</AppLayoutComponent>
	)
}

export default withAuth(MyAccount)
