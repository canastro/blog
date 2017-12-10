module.exports = {
    siteMetadata: {
        title: 'What About This?',
        author: 'Ricardo Canastro',
        description: 'A blog!',
        homeCity: 'Porto',
        siteUrl: 'https://canastro.github.io/blog/'
    },
    pathPrefix: '/blog',
    plugins: [
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-110924562-1',
                anonymize: true
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'What About This?',
                short_name: 'WAT?',
                start_url: '/blog',
                background_color: 'white',
                theme_color: 'white',
                display: 'minimal-ui',
                icons: [
                    {
                        src: '/favicons/logo.jpeg',
                        sizes: '200x200',
                        type: 'image/jpg'
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages'
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 590,
                            sizeByPixelDensity: true
                        }
                    },
                    {
                        resolve: 'gatsby-remark-responsive-iframe',
                        options: {
                            wrapperStyle: 'margin-bottom: 1.0725rem'
                        }
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants'
                ]
            }
        },
        'gatsby-plugin-sitemap',
        'gatsby-transformer-sharp',
        'gatsby-plugin-feed',
        'gatsby-plugin-sharp',
        'gatsby-plugin-offline',
        'gatsby-plugin-react-helmet',
        // 'gatsby-plugin-preact',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography'
            }
        }
    ]
};
