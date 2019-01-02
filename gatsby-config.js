module.exports = {
    siteMetadata: {
        title: 'Canastro\'s notes',
        author: 'Ricardo Canastro',
        description: 'A blog!',
        siteUrl: 'https://canastro.github.io/blog/',
        social: {
            twitter: '//www.twitter.com/canastro',
            stackoverflow: '//stackoverflow.com/users/236205/canastro',
            linkedin: '//www.linkedin.com/in/ricardocanastro'
        }
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-110924562-1',
                anonymize: true
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/blog`,
                name: 'blog'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/assets`,
                name: 'assets'
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 590
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
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-feed',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Canastro\'s notes',
                short_name: 'Canastro',
                start_url: '/blog',
                background_color: 'white',
                theme_color: 'white',
                display: 'minimal-ui',
                icon: 'content/assets/gatsby-icon.png'
            }
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography'
            }
        }
    ]
};
