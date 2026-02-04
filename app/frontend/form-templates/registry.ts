import { SurveyDefinition } from '../types';

export const surveys: Record<string, SurveyDefinition> = {
	customer_experience: {
		surveyKey: 'customer_experience',
		surveyName: 'Customer Experience',
		surveyPath: '/surveys/customer-experience',
		version: 1,
		questions: [
			{
				helpText: 'Example: N123AB',
				id: 'tail_number',
				label: 'Tail Number',
				maxLength: 10,
				minLength: 3,
				placeholder: 'N123AB',
				required: true,
				showLabel: true,
				type: 'text_input',
			},
      {
				helpText: 'Example: CAA',
				id: 'what_brought_you_to_north_star_jet',
				label: 'What bruoght you to North Star Jet?',
				placeholder: 'Select an option',
				required: true,
				showLabel: true,
				
        options: ['CAA', 'Contract Fuel', 'Prices', 'Customer Service', 'Word of Mouth', 'Other'],
				type: 'dropdown_select',
			},
      {
				helpText: 'Example: Pop Corn',
				id: 'what_is_your-favorite_amenity',
				label: 'What is your favorite amenity?',
				placeholder: 'Select an option',
				required: true,
				showLabel: true,
				
        options: ['Pop Corn', 'Merch', 'Coffee'],
				type: 'dropdown_select',
			},      
			{
				helpText: 'Example: Yes',
				id: 'would_you_return',
				label: 'Would you return?',
				placeholder: 'Select an option',
				required: true,
				showLabel: true,
				
        options: ['Yes', 'No'],
				type: 'dropdown_select',
			},
			{
				helpText: 'Overall score.',
				id: 'how_was_our_customer_service_stars',
				label: 'How was our Customer Service?',
				max: 5,
				min: 1,
				required: true,
				showLabel: false,
				type: 'stars',
			},
      {
				helpText: 'How was our service?',
				id: 'how_was_our_customer_service_text',
				label: 'How was our Customer Service?',
				maxLength: 500,
				minLength: 3,
				placeholder: 'What about us stood out to you?',
				required: true,
				showLabel: true,
				type: 'text_box',
			},
      {
				helpText: 'Overall score.',
				id: 'how_were_the_amenities_stars',
				label: 'How were the amenities?',
				max: 5,
				min: 1,
				required: true,
				showLabel: false,
				type: 'stars',
			},
      {
				helpText: 'How were our services?',
				id: 'how_were_the_amenities_text',
				label: 'How were the amenities?',
				maxLength: 500,
				minLength: 3,
				placeholder: 'Did any amenities stand out to you?',
				required: true,
				showLabel: true,
				type: 'text_box',
			},
      {
				helpText: 'Overall score.',
				id: 'how_did_you_like_our_prices_stars',
				label: 'How did you like our prices?',
				max: 5,
				min: 1,
				required: true,
				showLabel: false,
				type: 'stars',
			},
      {
				helpText: 'How were our services?',
				id: 'how_did_you_like_our_prices_text',
				label: 'How did you like our prices?',
				maxLength: 500,
				minLength: 3,
				placeholder: 'How do we compare?',
				required: true,
				showLabel: true,
				type: 'text_box',
			},
		],
	},
		fbo_workshop_survey: {
    surveyKey: 'fbo_workshop_survey',
    surveyName: 'FBO Workshop Survey',
    surveyPath: '/surveys/fbo-workshop-survey',
    version: 1,
    questions: [
			{
				id: 'Objective:_The_goal_of_the_FBO_survey_is_to_evaluate_the_effectiveness_of_the_leadership_team_by_gathering_employee_feedback_on_communication,_decision-making,_vision,_teamwork,_operational_changes_and_support._The_survey_aims_to_identify_leadership_strengths,_uncover_areas_for_improvement,_and_assess_alignment_with_company_values_and_culture._Insights_gained_will_help_guide_organizational_development,_enhance_transparency,_strengthen_employee_engagement,_and_ensure_leaders_are_equipped_to_drive_mission_success.',
				label:
					'**Objective:** The goal of the FBO survey is to evaluate the effectiveness of the leadership team by gathering employee feedback on communication, decision-making, vision, teamwork, operational changes and support. The survey aims to identify leadership strengths, uncover areas for improvement, and assess alignment with company values and culture. Insights gained will help guide organizational development, enhance transparency, strengthen employee engagement, and ensure leaders are equipped to drive mission success.',
				showLabel: true,
				required: true,
				type: 'question_base',
			},
			{
				id: 'Instructions:_Thank_you_for_taking_the_time_to_provide_feedback._Your_input_is_essential_in_helping_us_strengthen_our_leadership_practices_and_create_a_better_workplace_environment_for_the_entire_team._The_survey_is_100%_anonymous._Please_answer_honestly;_your_candid_feedback_helps_us_improve_and_perform_to_the_highest_standards._For_each_question:_Select_the_response_that_best_represents_your_experience_or_opinion._Although_not_required,_extra_space_has_been_provided_to_share_an_example_or_add_context_to_your_selected_answer.',
				label:
					'**Instructions:** Thank you for taking the time to provide feedback. Your input is essential in helping us strengthen our leadership practices and create a better workplace environment for the entire team. The survey is 100% anonymous. Please answer honestly; your candid feedback helps us improve and perform to the highest standards. For each question: Select the response that best represents your experience or opinion. Although not required, extra space has been provided to share an example or add context to your selected answer.',
				showLabel: true,
				required: true,
				type: 'question_base',
			},

			// Q1
			{
				helpText: '',
				id: 'question_1',
				label:
					'1. How effectively do team members collaborate and support one another in completing work?',
				required: true,
				showLabel: true,
				options: [
					'Very effectively',
					'Effectively',
					'Moderately effectively',
					'Slightly effectively',
					'Not effectively',
				],
				type: 'rating',
			},
			{
				helpText: 'Example: Describe a recent instance that shows collaboration or support.',
				id: 'question_1_text_box',
				label: 'Please give a specific example:',
				maxLength: 600,
				minLength: 0,
				placeholder: 'Share why you chose this rating.',
				required: false,
				showLabel: true,
				type: 'text_box',
			},

			// Q2
			{
				helpText: '',
				id: 'question_2',
				label: '2. How effectively does your direct leadership support you in your role?',
				required: true,
				showLabel: true,
				options: [
					'Very effectively',
					'Effectively',
					'Moderately effectively',
					'Slightly effectively',
					'Not effectively',
				],
				type: 'rating',
			},
			{
				helpText: 'Example: Coaching, resourcing, scheduling, recognition, or barrier removal.',
				id: 'question_2_text_box',
				label: 'Please give a specific example:',
				maxLength: 600,
				minLength: 0,
				placeholder: 'What did your leader do (or not do) that influenced your rating?',
				required: false,
				showLabel: true,
				type: 'text_box',
			},

			// Q3
			{
				helpText: '',
				id: 'question_3',
				label:
					'3. How clear and effective is communication within your team and across the Line Dept.?',
				required: true,
				showLabel: true,
				options: [
					'Very clear and effective',
					'Clear and effective',
					'Somewhat clear and effective',
					'Unclear and ineffective',
					'Very unclear and ineffective',
				],
				type: 'rating',
			},
			{
				helpText: 'Example: Shift handoffs, dispatch updates, email/Teams clarity, briefings, etc.',
				id: 'question_3_text_box',
				label: 'Please give a specific example:',
				maxLength: 600,
				minLength: 0,
				placeholder: 'Where does communication work well—or break down?',
				required: false,
				showLabel: true,
				type: 'text_box',
			},

			// Q4
			{
				helpText: '',
				id: 'question_4',
				label: '4. How would you describe your overall morale and motivation at work?',
				required: true,
				showLabel: true,
				options: ['Very high', 'High', 'Moderate', 'Low', 'Very low'],
				type: 'rating',
			},
			{
				helpText: 'Example: Recognition, workload, schedule, training, culture, career path.',
				id: 'question_4_text_box',
				label: 'Can you describe why:',
				maxLength: 600,
				minLength: 0,
				placeholder: 'What most influences your morale and motivation right now?',
				required: false,
				showLabel: true,
				type: 'text_box',
			},

			// Q5
			{
				helpText: '',
				id: 'question_5',
				label:
					'5. How well do you feel you are able to be productive in your role with the tools, resources, training, and expectations provided?',
				required: true,
				showLabel: true,
				options: ['Very well', 'Well', 'Adequately', 'Poorly', 'Very poorly'],
				type: 'rating',
			},
			{
				helpText: 'Example: GSE availability, systems access, SOP clarity, training, staffing.',
				id: 'question_5_text_box',
				label: 'Can you describe why:',
				maxLength: 600,
				minLength: 0,
				placeholder: 'What helps or hinders your productivity?',
				required: false,
				showLabel: true,
				type: 'text_box',
			},

			// Q6
			{
				helpText: '',
				id: 'question_6',
				label:
					'6. How well does NorthStar Jet function overall in enabling you to perform your job successfully? (Module 5)',
				required: true,
				showLabel: true,
				options: ['Extremely well', 'Well', 'Adequately', 'Poorly', 'Very poorly'],
				type: 'rating',
			},
			{
				helpText: 'Example: Cross-team coordination, policies, leadership consistency, processes.',
				id: 'question_6_text_box',
				label: 'Can you describe why:',
				maxLength: 600,
				minLength: 0,
				placeholder: 'What is the biggest thing NorthStar Jet does that helps—or gets in the way?',
				required: false,
				showLabel: true,
				type: 'text_box',
			},

			// Additional Comments
			{
				helpText: 'Anything else you’d like leadership to know.',
				id: 'Additional_Comments',
				label: 'Additional Comments',
				maxLength: 2000,
				minLength: 0,
				placeholder:
					'Share any other feedback, suggestions, or examples you think would help improve our operations, culture, or customer service.',
				required: false,
				showLabel: true,
				type: 'text_box',
			},

			// FBO Scoreboard Ideas – Multi-select
			{
				helpText:
					'Select as many ideas as you’d like—the goal is to showcase the team’s hard work and accomplishments.',
				id: 'FBO_Scoreboard_Ideas_(select_all_that_apply)',
				label: 'FBO Scoreboard Ideas (select all that apply)',
				placeholder: 'Select one or more',
				required: false,
				showLabel: true,
				options: [
					'Number of Ramp Services Performed',
					'Lav’s',
					'GPU’s',
					'Potable Water',
					'Belt Loader',
					'Call Out’s',
					'Transient Hangar Service',
					'Number of Aircraft Fueled (NSJ Ramp)',
					'Number of aircraft serviced (NSJ Ramp)',
					'Number of GSE Fuelings Performed',
					'Number of NSJ Gallons Pumped',
					'Number of Airline Gallons Pumped',
					'Number of Airlines Serviced',
					'Number of Accepted Fuel Loads',
					'Number of Gallons Delivered',
					'Number of Fueler Top-Offs Completed',
					'Number of Aircraft De-Iced',
					'Total Gallons Pumped (All Operations)',
				],
				type: 'check_box',
			},
			{
				helpText: 'Add any scoreboard metric not listed above.',
				id: 'Other_scoreboard_ideas_(optional)',
				label: 'Other scoreboard ideas (optional)',
				maxLength: 300,
				minLength: 0,
				placeholder: 'Propose additional scoreboard metrics…',
				required: false,
				showLabel: true,
				type: 'text_box',
			},

			// Closing note (non-interactive)
			{
				id: 'From_the_FBO_Leadership:_Thank_you_for_your_input._This_information_will_be_reviewed_together_as_a_team,_with_the_goal_of_identifying_shared_opportunities_to_deliver_the_highest_level_of_customer_service_as_the_most_unified,_highly_qualified_FBO_in_the_Northwest._The_results_of_this_survey_will_be_shared_and_discussed_during_the_upcoming_annual_FBO_leadership_development_workshop.',
				label:
					'**From the FBO Leadership:** Thank you for your input. This information will be reviewed together as a team, with the goal of identifying shared opportunities to deliver the highest level of customer service as the most unified, highly qualified FBO in the Northwest. The results of this survey will be shared and discussed during the upcoming annual FBO leadership development workshop.',
				showLabel: true,
				required: false,
				type: 'question_base',
			},
		]
	}
}
