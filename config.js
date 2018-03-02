module.exports = {
  // your community or team name to display on join page.
  community: process.env.COMMUNITY_NAME || 'Uber RIBs Community',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: process.env.SLACK_URL || 'uber-ribs.slack.com',
  // access token of slack
  // see https://github.com/outsideris/slack-invite-automation#issue-token
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: process.env.SLACK_TOKEN || 'xoxp-303119310306-303237301525-323525514917-bb5ec0b3824b8a357e22eb4e9d9d6972',
  // an optional security measure - if it is set, then that token will be required to get invited.
  inviteToken: process.env.INVITE_TOKEN || null,
  // an optional security measure - if both are set, then recaptcha will be used.
  recaptchaSiteKey: process.env.RECAPTCHA_SITE || null,
  recaptchaSecretKey: process.env.RECAPTCHA_SECRET || null,
  // default locale
  locale: process.env.LOCALE || "en",
};
