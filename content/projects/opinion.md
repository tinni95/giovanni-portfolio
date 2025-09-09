# Opinion - E-learning Platform

A comprehensive SaaS e-learning platform designed for Italian consultancy companies to deliver video-based training to their corporate clients and employees.

## Project Overview

Opinion is an enterprise-grade e-learning platform that enables consultancy companies to create and manage educational content for their corporate clients. The platform serves as a centralized hub where companies can upload video lessons for their employees, with comprehensive monitoring and progress tracking capabilities for fiscal compliance in Italy.

## Key Features

- **Multi-tier User Management**: Super users, company administrators, and employee access levels
- **Video Content Management**: Secure video upload, storage, and streaming
- **Progress Monitoring**: Real-time tracking of employee learning progress
- **Fiscal Compliance**: Built-in reporting for Italian tax benefits and training requirements
- **Company Portal**: Dedicated spaces for each client company
- **Employee Profiles**: Individual learning paths and progress tracking

## Technologies Used

- **Frontend**: React, Ant Design (AntD)
- **Backend**: AWS AppSync, AWS Lambda, AWS S3
- **Authentication**: AWS Cognito
- **Database**: AWS DynamoDB
- **Video Storage**: AWS S3 with CloudFront CDN
- **Monitoring**: AWS CloudWatch
- **Infrastructure**: AWS Serverless Architecture

## My Role

As the Full Stack Developer, I was responsible for:

- **Frontend Development**: React-based user interface with AntD components
- **Backend Architecture**: Complete AWS serverless backend design
- **Multi-tenant System**: Complex user hierarchy and permission management
- **Video Streaming**: Optimized video delivery and storage solutions
- **Progress Tracking**: Real-time monitoring and analytics system
- **Security Implementation**: Secure authentication and data protection

## Technical Highlights

- **Complex Multi-tenant Architecture**: Designed a sophisticated system supporting super users, company administrators, and employees with distinct access levels
- **AWS Serverless Backend**: Built entirely on AWS services including AppSync for GraphQL APIs, Lambda for business logic, and S3 for video storage
- **Scalable Video Solution**: Implemented efficient video upload, processing, and streaming using S3 and CloudFront
- **Real-time Progress Monitoring**: Developed comprehensive tracking system for employee learning progress with fiscal compliance reporting
- **Security & Compliance**: Implemented robust authentication using AWS Cognito with role-based access control
- **Performance Optimization**: Optimized video delivery and database queries for handling 500+ concurrent users

## Challenges Solved

- **Multi-tenant Data Isolation**: Implemented secure data separation between different companies and their employees
- **Video Streaming Performance**: Optimized video delivery for varying network conditions and device capabilities
- **Scalable User Management**: Built flexible user hierarchy system that can accommodate growing client base
- **Fiscal Compliance Integration**: Developed reporting system that meets Italian tax benefit requirements for employee training
- **Real-time Monitoring**: Created efficient progress tracking system that updates in real-time without performance impact

## Impact

- **500+ total users** (employees) across multiple companies
- **20+ companies** actively using the platform
- **100% uptime** achieved through AWS serverless architecture
- **Significant cost savings** for clients through automated training compliance reporting
- **Streamlined training delivery** reducing administrative overhead for consultancy companies
